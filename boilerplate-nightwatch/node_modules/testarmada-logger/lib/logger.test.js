const logger = require("./logger");

describe("Logger", () => {
  afterEach(()=>{
    logger.prefix = "Testarmada";
  });

  test("default prefix", ()=>{
    logger.log("something");
  });

  test("customized prefix", ()=>{
    logger.prefix = "Logger";

    logger.log("something");  
  });

  test("log level", ()=>{
    logger.log("something");  
  });

  test("warn level", ()=>{
    logger.warn("something");  
  });

  test("debug level", ()=>{
    logger.debug("something");  
  });

  test("err level", ()=>{
    logger.err("something");  
  });

  test("help level", ()=>{
    logger.loghelp("something");  
  });

  test("message spread", ()=>{
    logger.log("something", "is", "here");
  });
});