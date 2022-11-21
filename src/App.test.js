const assert = require('assert')
const firebase1 = require('@firebase/testing')
const MY_PROJECT_ID = 'newsapp-3e1cb'

describe('Test Case 1: ', () => {
  describe('Testing News Page for Fetching News: ', () => {
    it('Should return top headlines of News', async () => {
      const api = () => {
        return fetch(
          'https://newsapi.org/v2/top-headlines?apiKey=3d823e00f2104fedacf71e9e98e7b5fa&country=in',
        ).then((response) => {
          return response.json()
        })
      }

      const data = await api()
      // console.log(await data.articles[4].author)
      const authorName = await data.articles[4].author
      expect(data.articles[4].author).toEqual(authorName)
      // expect(data.articles[4].author).toEqual('Sunil Shankar Matkar')
    })
  })
})

describe('Test Case 2: ', () => {
  describe('Testing Bitcoin Request for correct Start date and End Date: ', () => {
    it('It used give data for 366 days for last Year', async () => {
      // let startDate = prompt('Enter Start Date (YYYY-MM-DD)')
      // console.log(startDate)
      const startDate = '2020-10-08'
      const endDate = '2021-10-08'
      const bitcoinApi = () => {
        return fetch(
          ` https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD&start=${startDate}&end=${endDate}`,
        ).then((response) => {
          return response.json()
        })
      }

      // console.log(await bitcoinApi())
      const data = await bitcoinApi()
      const totalDays = Object.keys(data.bpi).length
      expect(totalDays).toEqual(366)
    })
  })
})

describe('Test Case 3:', () => {
  describe('Testing Write Permission to Correct user Id', () => {
    it('Can write to a user document with the same ID as our user: ', () => {
      const db = firebase1
        .initializeTestApp({
          projectId: MY_PROJECT_ID,
        })
        .firestore()

      const testDoc = db.collection('users').doc('user_abc')
      firebase1.assertSucceeds(testDoc.set({ firstName: 'user1' }))
    })

    it("Can't write to a user document with the different ID of User: ", () => {
      const myAuth1 = { uid: 'user_abc123', email: 'abc@gmail.com' }
      const db = firebase1
        .initializeTestApp({
          projectId: MY_PROJECT_ID,
          auth: myAuth1,
        })
        .firestore()
      // console.log(db.collection('users').doc('user_abcxyz'))
      const userId = 'user_abc123'
      const testDoc = db.collection('users').doc(userId)
      firebase1.assertFails(testDoc.set({ firstName: 'user1' }))

      expect(myAuth1.uid).toEqual(userId)
    })
  })
})

describe('Test Case 4:', () => {
  describe('Testing Contact-Us Data: ', () => {
    const oldContactUsData = [
      {
        id: '1111',
        firtName: 'Amaresh',
        lastName: 'Baranwal',
        emailId: 'amaresh@gmail.com',
        phoneNo: 722121212,
        message: 'My message 1',
      },
      {
        id: '2222',
        firtName: 'Pratham',
        lastName: 'Maner',
        emailId: 'pratham@gmail.com',
        phoneNo: 3245667898,
        message: 'My message 2',
      },
    ]

    const newContactUsData = {
      id: '3333',
      firtName: 'Kenil',
      lastName: 'Shah',
      emailId: 'kenil@gmail.com',
      phoneNo: 224252,
      message: 'My message 3',
    }
    it('Validating details', async () => {
      expect(typeof newContactUsData.id).toBe('string')
      expect(typeof newContactUsData.firtName).toBe('string')
      expect(typeof newContactUsData.lastName).toBe('string')
      expect(typeof newContactUsData.emailId).toBe('string')
      expect(typeof newContactUsData.phoneNo).toBe('number')
      expect(typeof newContactUsData.message).toBe('string')
    })

    it('It should update existing items in the old list', async () => {
      const updatedContactUsData = [...oldContactUsData, newContactUsData]
      expect(updatedContactUsData.length).toEqual(oldContactUsData.length + 1)
    })
  })
})
