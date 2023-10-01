import React, { useEffect, useState } from "react";
import storageService from "../../service/storage.service";
import httpService from "../../service/http.service";

const DemoHttpService = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setKey("default");
    setValue(storageService.get("default"));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    storageService.setObjectSession(key, {
      key: "demoobject",
      value: "abc",
      name: "123",
      items: [1, 3, 4, 5, 6],
    });
  };

  const handleCallApi = () => {
    const response = httpService.get( "api/v1/login" );
    storageService.set("access_token", response.data.jwt)
  };

  const handleDeleteLocalStorage = () => {
    console.log("Delete key = ", key);
    storageService.remove(key);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          style={{ border: "1px solid gray" }}
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <br />
        <input
          style={{ border: "1px solid gray" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <button type="button" onClick={() => handleDeleteLocalStorage()}>
        Delete key
      </button>

      <br />

      <button type="button" onClick={() => handleCallApi()}>
        CallAPI
      </button>
    </>
  );
};

export default DemoHttpService;
