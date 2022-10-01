import * as vscode from 'vscode';

function countWords(str : string) : number {
	return str.trim().split(/\s+/).length;
}

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "hello" is now active!');

	let disposableHello = vscode.commands.registerCommand('hello.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from helloWorld :) !');
	});
	let disposableCountWord = vscode.commands.registerCommand('hello.countWords', () => {
		vscode.window.showInformationMessage('Count words in file!');
		if(vscode.window.activeTextEditor === undefined || 
            vscode.window.activeTextEditor.document === undefined){
              return;
          }
          let text = vscode.window.activeTextEditor.document.getText();
          
         
          vscode.window.showInformationMessage(`Document contains: ${countWords(text)} words`);
	});

	context.subscriptions.push(disposableHello, disposableCountWord);
}

export function deactivate() {}


//  commands.forEach(command => context.subscriptions.push(command));