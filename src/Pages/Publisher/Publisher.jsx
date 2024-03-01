import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

import {
  getPublishers,
  deletePublisher,
  createPublisher,
  updatePublisherFunc,
} from "../../API/publisher";
import "./Publisher.css";

function Publisher() {
  const [publishers, setPublishers] = useState([]);
  const [reload, setReload] = useState(true);

  //New Publisher

  const [newPublisher, setNewPublisher] = useState({
    publisherName: "",
    establishmentYear: "",
    address: "",
  });

  const handleNewPublisher = (event) => {
    setNewPublisher({
      ...newPublisher,
      [event.target.name]: event.target.value,
    });
    console.log(newPublisher);
  };

  const handleNewPublisherBtn = () => {
    console.log(newPublisher);
    createPublisher(newPublisher).then(() => {
      setReload(true);
    });
    setNewPublisher({
      publisherName: "",
      establishmentYear: "",
      address: "",
    });
  };

  //Delete Publisher

  const handleDelete = (id) => {
    deletePublisher(id).then(() => {
      setReload(true);
    });
  };

  //Update Publisher

  const [updatePublisher, setUpdatePublisher] = useState({
    publisherName: "",
    establishmentYear: "",
    address: "",
  });

  const handleUpdatePublisherInputs = (event) => {
    setUpdatePublisher({
      ...updatePublisher,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateBtn = (publisher) => {
    console.log(publisher)
    setUpdatePublisher(publisher);
  };

  const handleUpdate = () => {
    updatePublisherFunc(updatePublisher).then(() => {
      setReload(true);
    });
    setUpdatePublisher({
      publisherName: "",
      establishmentYear: "",
      address: "",
    });
  };

  useEffect(() => {
    getPublishers().then((data) => {
      setPublishers(data);
    });
    setReload(false);
  }, [reload]);

  {
    /* ------------------------------------------------------ */
  }
  return (
    <>
      <div className="category-newcategory">
        <h2>Yeni Publisher</h2>
        <input
          type="text"
          placeholder="Adi"
          name="publisherName"
          value={newPublisher.publisherName}
          onChange={handleNewPublisher}
        />
        <input
          type="text"
          placeholder="Adres"
          name="address"
          value={newPublisher.address}
          onChange={handleNewPublisher}
        />

        <input
          type="number"
          placeholder="Kurulus Yili"
          name="establishmentYear"
          value={newPublisher.establishmentYear}
          onChange={handleNewPublisher}
        />
        <button onClick={handleNewPublisherBtn}>Create</button>
      </div>

      {/* ------------------------------------------------------ */}

      <div className="category-updatecategory">
        <h2>Publisher Guncelle</h2>
        <input
          type="text"
          placeholder="Adi"
          name="name"
          value={updatePublisher.name} //dbdekiname value name idi.kayitli olan name olarak geliyor.
          onChange={handleUpdatePublisherInputs}
        />
        <input
          type="text"
          placeholder="Adres"
          name="address"
          value={updatePublisher.address}
          onChange={handleUpdatePublisherInputs}
        />

        <input
          type="number"
          placeholder="Kurulus Yili"
          name="establishmentYear"
          value={updatePublisher.establishmentYear}
          onChange={handleUpdatePublisherInputs}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>

      <div className="list">
        <h2>Publisher Listesi</h2>
        {publishers.map((publisher) => (
          <div key={publisher.id}>
            <h3>
              {publisher.name} {publisher.id}
              <span
                id={publisher.id}
                onClick={() => handleDelete(publisher.id)}
              >
                <DeleteIcon />
              </span>{" "}
              <span onClick={() => handleUpdateBtn(publisher)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {publisher.address}
          </div>
        ))}
      </div>
    </>
  );
}

export default Publisher;
