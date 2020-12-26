# WebWorker-Data-Handling
Using web workers to update dictionary data that type on textarea

When dictionary data update using main script, browser can handle small amount of data array in main thread. When it becomes larger(depends on browser/pc performance) browser can freeze till it process that array. So we can use WebWorkers to prevent that happening. WebWorkers using a new thead to process that data. So we can do other things till it process and send us the results. This is a test project to see it actually works.
