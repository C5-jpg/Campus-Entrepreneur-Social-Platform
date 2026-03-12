const { describe, it } = require('node:test');
const assert = require('node:assert');

// Mock the database dependency before requiring the recommendation service
const mockDatabase = {
    query: async () => []
};

// We use require.cache to inject the mock
require.cache[require.resolve('../config/database')] = {
    exports: mockDatabase
};

const { calculateMatchScore } = require('../services/recommendation');

describe('recommendation service - calculateMatchScore', () => {
    it('should calculate a perfect match score (100)', () => {
        const userA = {
            tags: ['A', 'B', 'C'],
            grade: '本科大一',
            major: '计算机科学',
            statusTag: '有项目找技术'
        };
        const userB = {
            tags: ['A', 'B', 'C'],
            grade: '本科大一',
            major: '计算机科学',
            statusTag: '技术找项目',
            activityScore: 100
        };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 100);
    });

    it('should calculate a low score for unrelated users', () => {
        const userA = {
            tags: ['A'],
            grade: '本科大一',
            major: '金融',
            statusTag: '找合伙人'
        };
        const userB = {
            tags: ['B'],
            grade: '博士',
            major: '建筑设计',
            statusTag: '投资',
            activityScore: 50
        };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 14);
    });

    it('should handle partial tag matches using Jaccard similarity', () => {
        const userA = { tags: ['A', 'B'], grade: '本科大一', major: 'X', statusTag: 'Y' };
        const userB = { tags: ['B', 'C'], grade: '本科大一', major: 'X', statusTag: 'Y', activityScore: 50 };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 61);
    });

    it('should handle grade similarity correctly', () => {
        const userA = { grade: '本科大一', tags: [], major: 'X', statusTag: 'Y' };
        const userB = { grade: '本科大二', tags: [], major: 'X', statusTag: 'Y', activityScore: 50 };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 55);
    });

    it('should handle major group similarity', () => {
        const userA = { major: '计算机科学', tags: [], grade: '本科大一', statusTag: 'Y' };
        const userB = { major: '软件工程', tags: [], grade: '本科大一', statusTag: 'Y', activityScore: 50 };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 55);
    });

    it('should handle status complementarity', () => {
        const userA = { statusTag: '有项目找技术', tags: [], grade: '本科大一', major: 'X' };
        const userB = { statusTag: '技术找项目', tags: [], grade: '本科大一', major: 'X', activityScore: 50 };

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 67);
    });

    it('should handle missing properties gracefully', () => {
        const userA = {};
        const userB = {};

        const score = calculateMatchScore(userA, userB);
        assert.strictEqual(score, 39);
    });
});
