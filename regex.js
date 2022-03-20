const xml = `<?xml version="1.0" ?> 
<ServiceExceptionReport 
  version="1.2.0" 
  xmlns="http://ccri.geoserver-kafka.com"
  xmlns:xsi="http://hellowworld.com"
  xsi:schemaLocation="http://thisisthedatabase.com">
  <ServiceException code="InvalidParameterValue">
    Could not find type: {theError}asdf
  </ServiceException>
</ServiceExceptionReport>`


const regexMatch = xml.match(/(?<=<ServiceException )([\s\S]+)(?=<\/ServiceException>)/)[0]

let result = "Error Code: " + regexMatch.match(/(?<=code=")([\s\S]+)(?=\")/)[0] + ". Service Exception: " + regexMatch.match(/(?<=">)([\s\S]+)/)[0].trim()

console.log(result)