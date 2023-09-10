
# Baby Tracker Data Merger

BTDM is a quick script to merge two files exported from the [Baby Tracker](https://play.google.com/store/apps/details?id=com.amila.parenting&hl=en&gl=US) app from [Amila](https://amila.io).

The use case for me was that my smartphone died and wouldn't boot anymore, so I switched to an old phone while I waited for the new one I bought to arrive. When the new one arrived, I asked Android to recover the data from the old phone that was backed up to Google Drive, so it was able to access my Baby Tracker data from that device.

However, now I had a few days of data recorded in my temporary phone that I wanted to merge into the new phone. Unfortunately, Baby Tracker does not support merging data and the only option it gave me was to replace everything - what I obviously didn't want.

The exported data is a simple zipped JSON file that is renamed to have the `.abt` extension. What this script does is read two JSON files exported from the app, merge their data and produce a new file containing the merge result.

## How to use

First, export the data from your two smartphones. Keep those files safe in case something goes wrong. Rename both files to have the `.zip` extension, decompress them and get the JSON files.

One of the JSON files will be the base file and all its data will be preserved. The second file will have its records read, but everything else (baby name, baby birthday, etc) will be discarded. With that in mind, make sure that the first file passed as parameter is the more complete one.

Once files are ready, run:

    nvm i
    node index baseFile.json extraFile.json > baby.json

`nvm` only needs to be executed once and will install Node.js to the local folder.

Once the output file is ready, compress it using zip and then rename the extension to `.abt`. Finally, open Baby Tracker and import the file, overwriting whatever is there. Just make sure that you back up your original exported files in case something goes wrong.

## JSON structure

The JSON file is structured like so:

```
{
    "birthday": "2023-09-10",
    "gender": "NONE",
    "name": "Foo",
    "notes": [],
    "records": [
        ...    
    ],
    "sessions": [],
    "version": 1
```

Where `records` is an array of:

```
{
  "amount": 0,
  "category": "NONE",
  "details": "",
  "fromDate": "2023-09-10 13:25:00",
  "subtype": "NONE",
  "toDate": "2023-09-10 14:26:38",
  "type": "SLEEPING",
  "unit": "NONE"
}
```

What the script does it to keep the exact root structure from the first file and then merge records from the second file while keeping everything ordered by `fromDate`.
