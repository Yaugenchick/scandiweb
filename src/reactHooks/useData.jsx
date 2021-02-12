import React, { useState, useEffect } from 'react'

export function useData({ children }) {
	const [data, setData] = useState([])

	const loadingChild = (children) => {
		let nodes = []
		if (children.length > 0) {
			children.map((child) => {
				let elem = React.createElement(child.type, { ...child.props })
				nodes.push(elem)
			})
		}
		return nodes
	}
	useEffect(() => {

		let data = loadingChild(children)
		setData(() => data)

	}, [])

	return { data }
}