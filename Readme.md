# kwikAPI
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## DESCRIPTION

You got products?  We got API! The perfect API that provides you with a foundation of products, categories, and tags setup to hit the ground running.  Add a front end of your choice, and watch out, Amazon, here we come!


# TABLE OF CONTENTS

1. [Source](#source)
2. [Installation](#installation)
3. [Walkthrough](#walkthrough)
4. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

# SOURCE
The [source repository on GitHub](https://github.com/vasudevap/kwikAPI.git) contains the code for the app.

# INSTALLATION
1. Download the code.
2. Open the terminal in the root folder of the source
3. run `npm i` to install the libraries required
4. run `npm start` to start the webserver on `port 3001`
5. that's it!

# WALKTHROUGH
The following show how the data is formatted when any of the [HTTP Methods](#http-methods) are accessed via any of the available [routes](#routes).
## Using `GET` to retrieve all products, categories, or tags
## Using `GET` to retrieve a single product, category, or tag
## Using `POST` to create a single product, category, or tag
## Using `PUT` to update a single product, category, or tag
## Using `DELETE` to update a single product, category, or tag

# USAGE
To use this backend API application, simply connect any front-end that can perform a `fetch` to any of the routes listed [below](#routes)

## HTTP Methods
Following routes can be accessed via the following HTTP methods:
1. `GET`
2. `POST`
3. `PUT`
4. `DELETE`

### Routes
- `/api/products`
for products and associated tags and categories

- `/api/products/:id`
for products by their ID and associated tags and categories

- `/api/tags`
for tags and associated products

- `/api/tags/:id`
for tags and associated products by tag ID

- `/api/categories`
for categories and related products

- `/api/categroies/:id`
for categories and products for a single category with supplied ID

See mockup to see the results displayed in insomnia.

# CONTRIBUTING
If you're looking to help build a world free of heavy APIs, join me by sending your carrier pigeons to my [GitHub](https://github.com/vasudevap)


# TESTS
Test files for jest can be made available.


# LICENSE
[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)
 General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.


# QUESTIONS
Please reach me at [vasudevap](https://github.com/vasudevap) or at my email at prashant.vasudeva@gmail.com
---

