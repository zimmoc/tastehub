import React, { useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Upload from '../../../assets/upload.png';

import styles from '../../../styles/RecipeCreateEditForm.module.css';
import appStyles from '../../../styles/App.module.css';
import btnStyles from '../../../styles/Button.module.css';
import SideBar from '../../sidebar/SideBar';
import { Alert, Image, InputGroup } from 'react-bootstrap';
import Asset from '../../Asset';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../../api/axiosDefaults';

function RecipeCreateForm() {
  const [errors, setErrors] = useState({});

  const [recipeData, setRecipeData] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: [''],
    image: '',
  });
  const { title, description, ingredients, instructions, image } = recipeData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('image', imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post('/recipes/', formData);
      history.push(`/recipes/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients[index] = event.target.value;
    setRecipeData({
      ...recipeData,
      ingredients: newIngredients,
    });
  };

  const handleInstructionChange = (index, event) => {
    const newInstructions = [...recipeData.instructions];
    newInstructions[index] = event.target.value;
    setRecipeData({
      ...recipeData,
      instructions: newInstructions,
    });
  };

  const handleAddIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ''],
    });
  };

  const handleAddInstruction = () => {
    setRecipeData({
      ...recipeData,
      instructions: [...recipeData.instructions, ''],
    });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = recipeData.ingredients.filter((_, i) => i !== index);
    setRecipeData({
      ...recipeData,
      ingredients: newIngredients,
    });
  };

  const handleRemoveInstruction = (index) => {
    const newInstructions = recipeData.instructions.filter(
      (_, i) => i !== index
    );
    setRecipeData({
      ...recipeData,
      instructions: newInstructions,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setRecipeData({
        ...recipeData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const imageUpload = (
    <Form.Group className="text-center">
      {image ? (
        <>
          <figure>
            <Image className={appStyles.Image} src={image} rounded />
          </figure>
          <div>
            <Form.Label
              className={`${btnStyles.Button} ${btnStyles.Orange}`}
              htmlFor="image-upload">
              Change the image
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="image-upload">
          <Asset src={Upload} message="Click or tap to upload an image" />
        </Form.Label>
      )}
      <Form.File
        id="image-upload"
        accept="image/*"
        onChange={handleChangeImage}
        ref={imageInput}
      />
    </Form.Group>
  );

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className={appStyles.CustomInput}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
          className={appStyles.CustomInput}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={() => history.goBack()}>
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        type="submit">
        Post Recipe
      </Button>
    </div>
  );

  const ingredientsField = (
    <Form.Group>
      <Form.Label>Ingredients</Form.Label>
      {recipeData.ingredients.map((ingredient, index) => (
        <InputGroup className="mb-2" key={index}>
          <Form.Control
            type="text"
            name={`ingredient-${index}`}
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e)}
            className={`${appStyles.CustomInput}`}
          />
          <InputGroup.Append>
            <Button
              variant="outline-danger"
              onClick={() => handleRemoveIngredient(index)}
              disabled={recipeData.ingredients.length === 1}>
              &times;
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ))}
      <Button
        className={`ml-2 mt-2 ${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={handleAddIngredient}>
        Add Ingredient
      </Button>
    </Form.Group>
  );

  const instructionsField = (
    <Form.Group>
      <Form.Label>Instructions</Form.Label>
      {recipeData.instructions.map((instruction, index) => (
        <InputGroup className="mb-2" key={index}>
          <Form.Control
            type="text"
            name={`instruction-${index}`}
            value={instruction}
            onChange={(e) => handleInstructionChange(index, e)}
            className={`${appStyles.CustomInput}`}
          />
          <InputGroup.Append>
            <Button
              variant="outline-danger"
              onClick={() => handleRemoveInstruction(index)}
              disabled={recipeData.instructions.length === 1}>
              &times;
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ))}
      <Button
        className={`ml-2 mt-2 ${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={handleAddInstruction}>
        Add Instruction
      </Button>
    </Form.Group>
  );

  return (
    <Row>
      <Col xs={12} lg={3} className="m-0 p-0 d-none d-lg-block">
        <SideBar />
      </Col>
      <Col xs={12} lg={9} className="m-0 p-0">
        <Form onSubmit={handleSubmit}>
          <Col className="mb-3">
            <Container className={`${appStyles.Content} ${styles.Container}`}>
              <Row className="p-2">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  {imageUpload}
                  {errors?.image?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                </Col>
                <Col className={`mr-2 ${appStyles.Content}`}>{textFields}</Col>
              </Row>
            </Container>
          </Col>
          <Col className="mb-3">
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
              <Row className="p-2">
                <Col md={4}>
                  {ingredientsField}
                  {errors?.ingredients?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                </Col>
                <Col md={8}>
                  {instructionsField}
                  {errors?.instructions?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                </Col>
              </Row>
            </Container>
          </Col>
        </Form>
      </Col>
    </Row>
  );
}

export default RecipeCreateForm;
