
# BC Primo Customizations

- [Setting up the primo development environment](#setting-up-the-primo-development-environment)
- [Local development](#local-development)
- [Making changes to a custom package](#making-changes-to-a-custom-package)
- [Running tests](#running-tests)
- [Packaging your customizations](#packaging-your-customizations)



## Setting up the primo development environment

### Download the Primo Development Environment 

```sh
# ~/Projects
git clone git@github.com:BCLibraries/primo-explore-devenv.git
```

### Install dependencies

- node v.10.x
- npm
- gulp

### Install node modules

```sh
# ~/Projects/primo-explore-devenv
npm install
```

### Configure the proxy server

The local development environment connects to our production or staging instance of Primo via proxy. 

```javascript
// primo-explore-devenv/gulp/config.js
var PROXY_SERVER = 'https://bc.primo.exlibrisgroup.com:443';
```

### Download BC Primo Customizations 

Development will be easier if you download into the parent directory and name the local repo 01BC_INST-bclib_new, after the view name
```sh
# ~/Projects
git clone git@github.com:BCLibraries/bc-primo-customizations.git 01BC_INST-bclib_new
```
### Install BC Primo Customization packages

```sh
# ~/Projects/01BC_INST-bclib_new
npm install
```

### Link BC Primo Customizations to custom view location

```sh
# ~/Projects/01BC_INST-bclib_new
ln -s ~/Projects/01BC_INST-bclib_new ~/Projects/primo-explore-devenv/primo-explore/custom/
```

## Local development

### Run a local development server

```sh
# ~/Projects/primo-explore-devenv
gulp run --view 01BC_INST-bclib_new --ve
```
### Viewing the local development instance of Primo

Visit http://localhost:8003/discovery/search?vid=01BC_INST-bclib_new in your browser.

### Making changes to the view

Basic styles and templates can be changed in ```bc-primo-customizations```. Customization that changes or adds functionality is contained in separate [packages](package.json). A feature can be added or removed by editing [js/aaa_bootstrap.js](js/aaa_bootstrap.js) and installing or removing the npm package.

## Making changes to a custom package

### Download the package

```sh
# ~/Projects
git clone git@github.com:BCLibraries/primo-explore-bc-availability.git
```
### Link to the development environment

~~~sh
# ~/Projects/primo-explore-bc-availability
sudo npm link
~~~

~~~sh
# ~/Projects/01BC_INST-bclib_new
rm -rf node_modules/primo-explore-bc-availability
npm link primo-explore-bc-availability
~~~

## Running tests

### Run tests

~~~sh
# ~/Projects/primo-explore-bc-availability
gulp run-tests --view 01BC_INST-bclib_new --ve
~~~

## Packaging your customizations

### Switch customized packages to remote version

~~~sh
# ~/Projects/01BC_INST-bclib_new
rm -rf node_modules/primo-explore-bc-availability
npm install 
~~~

### Create the package

~~~sh
# ~/Projects/primo-explore-devenv
gulp create-package --view 01BC_INST-bclib_new --ve
~~~

~~~sh
# ~/Projects/primo-explore-devenv/packages/01BC_INST-bclib_new.zip
~~~

### Upload and deploy the package

1. In Alma, navigate to Configuration > Discovery > Display Configuration > Configure Views
2. Choose Edit from the action menu (three dots) and then select the Manage Customization Package tab
3. Download the Current View Customization Package of 01BC_INST-bclib_new.zip as a backup
4. Upload the new version of 01BC_INST-bclib_new.zip
5. Press the Save button in the upper right to deploy

![screenshot of steps to upload and deploy the package](deploy.png)
