import React, {useState, useEffect} from 'react'

export function useData ({url, children}) {
	const [data, setData] = useState([])
	// сделать проверку какой тип данных приходит json object other $$Symbolreactelement

	const loadingChild = (children) => {
		let nodes = []
		if(children.length > 0) {
			children.map((child) => {
				let elem = React.createElement(child.type, {...child.props})
				nodes.push(elem)
			})
		}
		return nodes
	}
	useEffect(() => {

		if(typeof(url) === "string" && url !== "") {
			fetch(url)
			.then(response => response.json())
			.then(data => setData(() => data))
			.catch(error => console.log(error))
		} else {
			let data = loadingChild(children)
			setData(() => data)
		}
	
	}, [])
	return {data, setData}
}