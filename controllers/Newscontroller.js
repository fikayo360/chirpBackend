const axios = require('axios')
const customError = require('../errors')
const { StatusCodes } = require('http-status-codes');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);


const getTopStories = async (req,res) => {
    try{
        const newsItems = await newsapi.v2.topHeadlines({
            country: 'ng',
            pageSize:20
          })
          res.status(StatusCodes.OK).json(newsItems)
        }
    catch(err){
        throw new customError.BadRequestError(err)
    }
}

const getNewsByCategory = async (req,res) => {
    const {category} = req.params
    try{
        const newsItems = await newsapi.v2.topHeadlines({
            country: 'ng',
            category: category,
            pageSize:20
          })
          res.status(StatusCodes.OK).json(newsItems)
        }
    catch(err){
        throw new customError.BadRequestError(err)
    }
}

module.exports = {getTopStories,getNewsByCategory}