#Portfolio of Renato Afonso

This is a simple portfolio for Udacity's front-end web development nanodegree.


### Responsiveness

Optmized for the following sizes:

	- Laptop (width: 1280px or more)
	- Tablet (width: 1024px)
	- Smartphone (width: 360px)

Media queries were made in between those widths, achieving full responsiveness. Hover effects on the portfolio section are only available on laptops as it doesn't make sense to use them on touchscreens. This hover content is available on smaller sizes without major content changes.


### Code

Two main files, index.html and main.css, and the needed pictures to build the site properly. To reduce load time, whenever possible, fonts and vectors were used.

All links open in a new tab.


####Navbar

An inline vector was used for the Udacity logo. Using an external link for this SVG logo wouldn't allow to change the SVG's `fill` so there was no other way but to place it in the HTML.

For the small icons that allow direct contact (i.e. mail, skype, linkedin and github), [Font Awesome](https://fontawesome.com/) was used.


####Hero

The picture is a .png and for smaller screen sizes, a smaller file is used, optmizing load times.


####Skills

The logos have no effect on hover, so external links were written in HTML.


####Portfolio

Project title is visible on hover for laptops. Smaller sizes display title by reducing image size so `srcset`was used.


###Style

I was looking for a minimal look with the Udacity's colors. The `palegrey`was obtained using [Adobe Colors CC](https://color.adobe.com/pt/create/color-wheel/) from the original colors.


###Future features

1. Reshape the navbar to remove the udacity text in order to allow larger icons.
2. Add effects on mousedown with JavaScript when clicking a portfolio project.
3. Change smartphone display of portfolio section from vertical column to horizontal scrolling carousel once the number of projects increases.
