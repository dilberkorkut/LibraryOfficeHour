import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  getAuthors,
  deleteAuthor,
  createAuthor,
  updateAuthorFunc,
} from "../../API/author";
import "./Author.css";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [reload, setReload] = useState(true);

  //New Author

  const [newAuthor, setNewAuthor] = useState({
    authorName: "",
    authorBirthdate: "",
    authorCountry: "",
  });

  //Update Author

  const [updateAuthor, setUpdateAuthor] = useState({
    authorName: "",
      authorBirthdate: "",
      authorCountry: "",
  });

  const handleNewAuthor = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
    console.log(newAuthor);
  };

  const handleCreate = () => {
    createAuthor(newAuthor).then(() => {
      setReload(true);
    });
    setNewAuthor({
      authorName: "",
      authorBirthdate: "",
      authorCountry: "",
    });
  };

  //Delete Author

  const handleDelete = (id) => {
    deleteAuthor(id).then(() => {
      setReload(true);
    });
  };

  useEffect(() => {
    getAuthors().then((data) => {
      setAuthors(data);
    });

    setReload(false);
  }, [reload]);

  //Update Author

  const handleUpdateBtn = (author) => {
    console.log(author);
    setUpdateAuthor(author);
    console.log(updateAuthor);
  };

  const handleUpdateChange = (event) => {
    setUpdateAuthor({
      ...updateAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    updateAuthorFunc(updateAuthor).then(() => {
      setReload(true);
    });
    setUpdateAuthor({
      authorName: "",
      authorBirthdate: "",
      authorCountry: "",
    });
  };

  return (
    <div>
      <div className="category-newcategory">
        <h2>Yeni Author</h2>
        <input
          type="text"
          placeholder="Name"
          name="authorName"
          value={newAuthor.authorName}
          onChange={handleNewAuthor}
        />
        <input
          type="date"
          placeholder="Birthdate"
          name="authorBirthdate"
          value={newAuthor.authorBirthdate}
          onChange={handleNewAuthor}
        />
        <input
          type="text"
          placeholder="Country"
          name="authorCountry"
          value={newAuthor.authorCountry}
          onChange={handleNewAuthor}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      {/* UPDATE AUTHOR  */}

      <div className="category-updatecategory">
        <h2>Publisher Guncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={updateAuthor.name}
          onChange={handleUpdateChange}
        />
        <input
          type="date"
          placeholder="Birthdate"
          name="birthDate"
          value={updateAuthor.birthDate}
          onChange={handleUpdateChange}
        />

        <input
          type="text"
          placeholder="Country"
          name="country"
          value={updateAuthor.country}
          onChange={handleUpdateChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>

      <div className="list">
        <h2>Author Listesi</h2>
        {authors.slice().sort((a,b) => a.id-b.id).map((author) => (
          <div key={author.id}>
            <h3>
              {author.id} {author.name} {author.birthDate}
              <span id={author.id} onClick={() => handleDelete(author.id)}>
                <DeleteIcon />
              </span>{" "}
              <span onClick={() => handleUpdateBtn(author)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {author.country}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
