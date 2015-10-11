from AngularPythonTwitterSearch.settings import *
import oauth2 as oauth
import json

def auth_twitter():
    CONSUMER_KEY = twitter_credentials['consumer_key']
    CONSUMER_SECRET = twitter_credentials['consumer_secret']
    ACCESS_KEY = twitter_credentials['access_token']
    ACCESS_SECRET = twitter_credentials['access_token_secret']

    consumer = oauth.Consumer(key=CONSUMER_KEY, secret=CONSUMER_SECRET)
    access_token = oauth.Token(key=ACCESS_KEY, secret=ACCESS_SECRET)
    client = oauth.Client(consumer, access_token)

    timeline_endpoint = "https://api.twitter.com/1.1/search/tweets.json?q=banana"
    response, data = client.request(timeline_endpoint)

    tweets = json.loads(data.decode(encoding='UTF-8'))
    #for tweet in tweets:
    #    print(tweet['text'])
    return tweets