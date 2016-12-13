import model from './model.js'

const URL = "*";

export default class haoshuzi extends model{
	async fetchContent (){
		let response = await this.fetch(URL);
		let text = await response.text();

		let m = text.match(/var jingxuanList = (.*?);/);
        let jokes = JSON.parse(m[1]).map(function (node){
          return node;
        });

        return jokes;
	}
}