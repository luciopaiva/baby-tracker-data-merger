
# Baby Tracker Data Merger

BTDM is a quick script to merge two files exported from the [Baby Tracker](https://play.google.com/store/apps/details?id=com.amila.parenting&hl=en&gl=US) app from [Amila](https://amila.io).

The use case for me was that my smartphone died and wouldn't boot anymore, so I switched to an old phone while I waited for the new one I bought to arrive. When the new one arrived, I asked Android to recover the data from the old phone that was backed up to Google Drive, so it was able to access my Baby Tracker data from that device.

However, now I had a few days of data recorded in my temporary phone that I wanted to merge into the new phone. Unfortunately, Baby Tracker does not support merging data and the only option it gave me was to replace everything - what I obviously didn't want.

The exported data is a simple zipped JSON file that is renamed to have the `.abt` extension. What this script does is read two JSON files exported from the app, merge their data and produce a new file containing the merge result.
