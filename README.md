# NLG

Natural-language generation (NLG) is a software process that transforms structured data into natural language. It can be used to produce long form content for organizations to automate custom reports, as well as produce custom content for a web or mobile application.

This project showcases sentiment and classify API that take the user input whether is be a sentence in which case the output will be whether the sentence is postive or negative or URL of an article in which it will render the subject of the article. 

## Getting Started / Installation

After cloning this repo be sure to install everything.

Use the package manager [npm] to install all plugins and loaders shown in the package.json file.

```
npm install
```

Once you have installed all the necessary plugins and loaders. Reference scripts in the _package.json_ file to start the project on a local server. You can do this my running the following. 

``` 
    npm run build-prod
    npm run build-dev
    npm start
```

Make sure to note that the `npm start` will have to be started in a seperate terminal to run having multiple servers running at once. 

## API Reference

Click [here](https://docs.aylien.com/textapi/#getting-started) to take a look at the Aylien API documentation that was used for this project. 

## License
[MIT](https://choosealicense.com/licenses/mit/)