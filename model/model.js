const DEFAULT_HEADER = new Headers({
	'Content-Type': 'text/plain'
});

export default class model {
	async fetch (url, method="get", headers=null, params={}){
		return await fetch(url, {  
			headers: DEFAULT_HEADER,
			method: "get"
      	});
	}
}