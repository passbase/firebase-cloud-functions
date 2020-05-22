![alt text](https://passbase.com/assets/images/meta.jpg "Passbase Banner")

# Official Passbase Firebase Cloud Functions

This project shows you how to set up a webhook endpoint via Express and Google Firebase Cloud Functions. Before your start, please sign up on our [developer platform](https://dashboard.passbase.com/), where you can run your first verification and later set up your webhook endpoint.

This guide assumes, you have already implemented a client side integration from our integration guide [official developer documentation](https://docs.passbase.com/) or are using our hosted integration and have successfully run your first verification.

## Requirements

This project was written with Node 10, which is the latest recommended version by Google. You also need to have `npm`/`yarn` and node installed. If you haven't, please follow [this guide here](https://www.codecademy.com/articles/react-setup-i) first to install everything correctly.

## Install & Run

In the project directory can run:

1. You can run `npm install` inside the functions directory to install all dependencies for development
2. Set up your project to use cloud functions. You can learn how to do so [here](https://firebase.google.com/docs/functions/get-started)
3. Login to the Firebase CLI with `firebase login` and you probably need to update the `firebase.json` file to point towards your own project
4. Deploy the functions with `firebase deploy --only functions`

They should now show up in your Firebase Dashboard. For a detailed integration guide, check out our [developer documentation](https://docs.passbase.com/).

## FAQ

Remember that Cloud Functions will soon require the pay-as-you-go (Blaze) billing plan to deploy. You need to upgrade your project. From 2020-06-23 it will not work in the frree plan. For more information, see: https://firebase.google.com/support/faq#functions-runtime
