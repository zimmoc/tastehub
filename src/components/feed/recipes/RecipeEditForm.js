import React, { useEffect, useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import styles from '../../../styles/RecipeCreateEditForm.module.css';
import appStyles from '../../../styles/App.module.css';
import btnStyles from '../../../styles/Button.module.css';
import SideBar from '../../sidebar/SideBar';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../../api/axiosDefaults';

function RecipeEditForm() {
  const [errors, setErrors] = useState({});
  const { id } = useParams();
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

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/recipes/${id}`);
        const {
          title,
          description,
          ingredients,
          instructions,
          image,
          is_owner,
        } = data;

        const parsedIngredients = Array.isArray(ingredients)
          ? ingredients
          : JSON.parse(ingredients);
        const parsedInstructions = Array.isArray(instructions)
          ? instructions
          : JSON.parse(instructions);

        is_owner
          ? setRecipeData({
              title,
              description,
              ingredients: parsedIngredients,
              instructions: parsedInstructions,
              image,
            })
          : history.push('/');
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('instructions', JSON.stringify(instructions));

    if (imageInput?.current?.files[0]) {
      formData.append('image', imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/recipes/${id}`, formData);
      history.push(`/recipes/${id}`);
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
      <figure>
        <Image className={appStyles.Image} src={image} rounded />
      </figure>
      <div>
        <Form.Label
          className={`${btnStyles.Button} ${btnStyles.Orange} btn`}
          htmlFor="image-upload">
          Change the image
        </Form.Label>
      </div>

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
        Update recipe
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
      <Col
        md={4}
        lg={3}
        className={`d-none d-md-block p-0 m-0 ${appStyles.SideColumn}`}>
        <SideBar />
      </Col>
      <Col className={`p-0 pl-3 pr-3 ${appStyles.MiddleColumn}`} md={8} lg={9}>
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

export default RecipeEditForm;
