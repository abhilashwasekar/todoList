const assert = require('assert');
const Task = require('../models/taskModel');

describe('Task Model Validation', () => {
    it('should throw a validation error if title is not provided', async () => {
        try {
            const task = new Task({ description: 'Sample description' });
            await task.save();
        } catch (error) {
            assert(error.message.includes('Title is required'));
        }
    });

    it('should throw a validation error if title is not a string', async () => {
        try {
            const task = new Task({ title: 123, description: 'Sample description' });
            await task.save();
        } catch (error) {
            assert(error.message.includes('Title must be a string'));
        }
    });

    it('should save a valid task', async () => {
        const task = new Task({ title: 'Sample task', description: 'Sample description' });
        const savedTask = await task.save();
        assert.strictEqual(savedTask.title, 'Sample task');
    });
});
