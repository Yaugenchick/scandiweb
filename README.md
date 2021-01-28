## Carousel for e-commerce with react

---

### Descriptions

Fully customizable module for your project. Supports css, scss, styled-components, swipe-event, animations. It also reacts to the bandwidth of the Internet connection, which allows you to solve tasks such as turning off animations to eliminate the excessive use of the CPU resources of the user's device, which directly affects the speed and performance of your application.

---

### Using

```
import Carousel from "yourpath"

const YourCarousel = Carousel

const App = () => {
	return(
	<YourCarousel
		// support
	>
		// your elements with content
	</YourCarousel>
	)
}

export default App
```

### Using descriptions

You can customize the styles for dots, prew next buttons.
Buttons support strings, jpg, jpeg, png, svg, webp, heic, heif formats, as well as Unicode mnemonic characters.
The rest of the settings work by default for a good user experience, but you can turn them off if you like.

```
<YourCarousel
	dotTheme={"your color"}
	activeDotTheme={"your color"}
	buttonTheme={"your color"}
	buttonIco={{
		prew: () => your ico,
		next: () => your ico
	}}
>
	//your elements with content
</YourCarousel>
```

Also, if you need to, you can disable buttons, dots, or all together.

```
<YourCarousel
	dots={false}
	controls={false}
>
	//your elements with content
</YourCarousel>
```

If the carousel module has no children, you can pass an array of objects with the url address.

```
<YourCarousel url={your data}/>
```

---

### All settings

// add table and add in header file styles buttons with descriptions of dependensies
// working install in npm yarn bit
// working key words for promout company in world networks
// working add LED for syntax
