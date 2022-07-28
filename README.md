# Admin Dashboard
## Cloning the application
```
git clone https://github.com/SachinK1992/admin_dashboard.git
```

```
cd admin_dashboard
```

## Installing Dependencies and Starting dev server
### Install packages
```
npm install
```

### Start App
```
npm start
```

### Install packages including dev dependencies
```
npm install --include=dev
```

### Start storybook
```
npm run storybook
```

### For Linting use commands
```
npm run lint

npm run lint:fix
```

### Process to add svg icons and use as React components.
```
1. Download the svg images from figma or anywhere.
2. Copy them and paste in location - 'src/components/ui-kit/icons/svg'
3. Then to use them as react components and to generate storybook for them, Run command :
   npm run sync-icons
```

## Admin Dashboard
```
This is the basic admin panel which gives authorize admin to control their website or app data. By the help of the panel You can manage your users, and all functionality which is require in your app. The dashboard will display all the info in summary form and represent you data in the form of graphs.
The features I have implemented in this panel are -

1. Login and logout screens with functionality.
2. MultiLanguage support for panel including german and english.
3. Dashboard page with dummy data including pie chart, bar chart and line chart.
4. Setting page with basic UI.
5. Include contact and support section in Sidebar.
6. Added cookie, localStorage services to maintain auth system.
7. Added Snackbar / Toaster services for managing success, error, warning, and info notifications.
8. Added restrict node version script to use appropriate environment for development.
9. Config and Added Storybook in a panel for its UI kit. So that the development becomes easier when you are working in a team.
10. Added and config husky and standard js for linting.
```

### External Libraries Used
```
1. Storybook and its addon plugins.
2. Redux toolkit
3. Redux Thunk
4. Material UI
5. Husky and Standard JS
6. Yup and Formik
7. Universal Cookie
8. Chart JS
9. Faker and Moment JS
10. Translation using i18
```


## Development System specifications
* OS - `Ubuntu 20.04`
* npm version - `v8.1.1`
* node version - `v16.13.1`
