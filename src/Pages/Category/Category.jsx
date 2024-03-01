import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  getCategories,
  deleteCategory,
  createCategory,
  updateCategoryFunc,
} from "../../API/category";
import "./Category.css";

function Category() {
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(true);
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    categoryDescription: "",
  });
  const [updateCategory, setUpdateCategory] = useState({
    categoryName: "",
    categoryDescription: "",
  });
  useEffect(() => {
    getCategories().then((data) => {
      setCategory(data);
    });
    console.log(category);
    setReload(false);
  }, [reload]);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setReload(true);
    });
  };

  const handleUpdate = () => {
    updateCategoryFunc(updateCategory).then(() => {
      setReload(true);
    });
    setUpdateCategory({
      categoryName: "",
      categoryDescription: "",
    });
  };

  const handleNewCategory = (event) => {
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = () => {
    createCategory(newCategory).then(() => {
      setReload(true);
    });
    setNewCategory({
      categoryName: "",
      categoryDescription: "",
    });
    console.log(newCategory);
  };

  const handleUpdateBtn = (cat) => {
    setUpdateCategory({
      categoryName: cat.categoryName,
      categoryDescription: cat.categoryDescription,
      id: cat.id,
    });
  };

  const habdleUpdateChange = (event) => {
    setUpdateCategory({
      ...updateCategory,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Category</h1>
      <div className="category-newcategory">
        <h2>Yeni Kategori</h2>
        <input
          type="text"
          placeholder="Name"
          name="categoryName"
          value={newCategory.categoryName}
          onChange={handleNewCategory}
        />
        <input
          type="text"
          placeholder="Description"
          name="categoryDescription"
          value={newCategory.categoryDescription}
          onChange={handleNewCategory}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      <div className="category-updatecategory">
        <h2>Kategori Guncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="categoryName"
          value={updateCategory.categoryName} 
          onChange={habdleUpdateChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="categoryDescription"
          value={updateCategory.categoryDescription}
          onChange={habdleUpdateChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Kategori Listesi</h2>
        {category.map((category) => (
          <div key={category.id}>
            <h3>
              {category.categoryName} {category.id}
              <span id={category.id} onClick={() => handleDelete(category.id)}>
                <DeleteIcon />
              </span>{" "}
              <span onClick={() => handleUpdateBtn(category)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {category.categoryDescription}
          </div>
        ))}
      </div>
    </>
  );
}


export default Category;




 {/* <select>
  {category.map((category) => {
    <option key={category.id} value={category.id}>
      {category.name}

    </option>
  })}
</select> */}
