import mongoose from 'mongoose';

const runSchema = new mongoose.Schema({
    name: String,
    polyline: String
});

const Run = mongoose.model('Run', runSchema);
export default Run;
