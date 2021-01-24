import mongoose from 'mongoose';
import Article from '../Article';

export default interface ArticleDocument extends Article, mongoose.Document {}
