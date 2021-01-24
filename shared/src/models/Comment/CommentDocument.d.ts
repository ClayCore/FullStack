import mongoose from 'mongoose';
import Comment from '../Comment';
export default interface CommentDocument extends Comment, mongoose.Document {}
