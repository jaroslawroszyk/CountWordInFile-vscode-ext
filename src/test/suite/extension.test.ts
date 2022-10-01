import * as assert from 'assert';
import {countWords} from '../../wordCounter';
// import {countWords} from '.../wordCounter';
// You can import and use all API from the 'vsacode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});

suite("wordCounter Tests", () => {
	test("3 words with funny separators", () => {
		assert.equal(3, countWords('a\rnew\tword'));
	});
}); 
