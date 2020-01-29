import localforage from 'localforage';

localforage.setDriver([localforage.INDEXEDDB, localforage.WEBSQL]);

localforage.ready().then(function() {
    // This code runs once localforage
    // has fully initialized the selected driver.
    console.log(localforage.driver()); 
}).catch(function (e) {
    console.log(e); // `No available storage method found.`
    // One of the cases that `ready()` rejects,
    // is when no usable storage driver is found
});

export const bpstore = localforage.createInstance({
    driver: [localforage.INDEXEDDB],
    name: 'bp-store',
});


