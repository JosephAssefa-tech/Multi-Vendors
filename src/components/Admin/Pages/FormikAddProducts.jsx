import { Formik, Form, Field } from "formik";
import { Button, Card, Form as BootstrapForm, Row, Col } from "react-bootstrap";
import ValidationSchema from "../../../utils/validations/ValidationSchema";
import FormActions from "../../../shared/common/FormActions";
 import  {useCreateProduct}  from "../../../hooks/useCreateProduct";
import { useCategories } from "../../../hooks/useCategories";

import FormikField from "../../../shared/common/FormikField";
import FormikSelect from "../../../shared/common/FormikSelect";

function FormikAddProducts() {
  const createProduct  = useCreateProduct();
  const { data, isLoading, error } = useCategories();

//   return (
//     <Formik
//       validationSchema={ValidationSchema}
  
//       initialValues={{
//         productName: "",
//         category: "",
//         brand: "",
//         sku: "",
//         price: "",
//         stock: "",
//         // imageUrl: "",
//         description: "",
//       }}
// onSubmit={async (values, helpers) => {
//   console.log("Before mutation");

//   try {
//     const result = await createProduct.mutateAsync(values);
//     helpers.resetForm();
//   } catch (error) {
//     console.error("Mutation failed", error);
//   }

//   console.log("After mutation");
// }}

      
//     >
//       {({ errors, touched, isSubmitting, resetForm }) => (
//         console.log("Errors:", errors),
//         <Form>
//           <Card className="border-0 shadow-sm">
//             <Card.Body>
//               <Row className="g-4">
//                 {/* Product Information */}
//                 <Col md={12}>
//                   <h5 className="mb-3">Product Information</h5>
//                 </Col>

//                 <Col md={8}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>Product Name</BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       name="productName"
//                       isInvalid={touched.productName && errors.productName}
//                       placeholder="Apple iPhone 15 Pro Max"
//                     />
//                     <BootstrapForm.Control.Feedback type="invalid">
//                       {errors.productName}
//                     </BootstrapForm.Control.Feedback>
//                   </BootstrapForm.Group>
//                 </Col>

//    <Col md={4}>
//   <BootstrapForm.Group>
//     <BootstrapForm.Label>Category</BootstrapForm.Label>
//     <Field
//       as={BootstrapForm.Select}
//       name="category"
//       isInvalid={touched.category && errors.category}
//       disabled={isLoading || !!error} // Disables dropdown if loading or broken
//     >
//       {isLoading ? (
//         <option>Loading categories...</option>
//       ) : error ? (
//         <option>Error loading categories</option>
//       ) : (
//         <>
//           <option value="">Select Category</option>
//           {data?.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.categoryName}
//             </option>
//           ))}
//         </>
//       )}
//     </Field>
//     <BootstrapForm.Control.Feedback type="invalid">
//       {errors.category}
//     </BootstrapForm.Control.Feedback>
//   </BootstrapForm.Group>
// </Col>

//                 <Col md={6}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>Brand</BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       name="brand"
//                       placeholder="Apple"
//                       isInvalid={touched.brand && errors.brand}
//                     />
//                     <BootstrapForm.Control.Feedback type="invalid">
//                       {errors.brand}
//                     </BootstrapForm.Control.Feedback>
//                   </BootstrapForm.Group>
//                 </Col>

//                 <Col md={6}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>SKU</BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       name="sku"
//                       placeholder="IPH15PM-BLK-256"
//                     />
//                   </BootstrapForm.Group>
//                 </Col>

//                 {/* Pricing */}
//                 <Col md={12}>
//                   <hr />
//                   <h5 className="mb-3">Pricing & Inventory</h5>
//                 </Col>

//                 <Col md={6}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>Price ($)</BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       type="number"
//                       name="price"
//                       placeholder="999.99"
//                       isInvalid={touched.price && errors.price}
//                     />
//                     <BootstrapForm.Control.Feedback type="invalid">
//                       {errors.price}
//                     </BootstrapForm.Control.Feedback>
//                   </BootstrapForm.Group>
//                 </Col>

//                 <Col md={6}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>Stock Quantity</BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       type="number"
//                       name="stock"
//                       placeholder="100"
//                       isInvalid={touched.stock && errors.stock}
//                     />
//                     <BootstrapForm.Control.Feedback type="invalid">
//                       {errors.stock}
//                     </BootstrapForm.Control.Feedback>
//                   </BootstrapForm.Group>
//                 </Col>

//                 {/* Media */}
//                 {/* <Col md={12}>
//                   <hr />
//                   <h5 className="mb-3">Media</h5>
//                 </Col>

//                 <Col md={12}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>
//                       Product Image URL
//                     </BootstrapForm.Label>
//                     <Field
//                       as={BootstrapForm.Control}
//                       name="imageUrl"
//                       placeholder="https://..."
//                     />
//                   </BootstrapForm.Group>
//                 </Col> */}

//                 {/* Description */}
//                 {/* <Col md={12}>
//                   <hr />
//                   <h5 className="mb-3">Description</h5>
//                 </Col> */}

//                 <Col md={12}>
//                   <BootstrapForm.Group>
//                     <BootstrapForm.Label>
//                       Product Description
//                     </BootstrapForm.Label>
//                     <Field
//                       as="textarea"
//                       className="form-control"
//                       rows={4}
//                       name="description"
//                       placeholder="Enter detailed product description..."
//                       isInvalid={touched.description && errors.description}
//                     />
//                     <BootstrapForm.Control.Feedback type="invalid">
//                       {errors.description}
//                     </BootstrapForm.Control.Feedback>
//                   </BootstrapForm.Group>
//                 </Col>

//                 {/* Footer */}
//                 <Col md={12}>
//                   {/* <FormActions
//                     onCancel={resetForm}
//                     isSubmitting={isSubmitting}
//                   /> */}
//                   <div className="d-flex justify-content-end gap-2 mt-3">
//                     <Button
//                       variant="outline-secondary"
//                       type="button"
//                       onClick={() => resetForm()}
//                     >
//                       Cancel
//                     </Button>

//                     <Button type="submit" disabled={isSubmitting}>
//                       {isSubmitting ? "Saving..." : "Save Product"}
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Form>
//       )}
//     </Formik>
//   );

return (
    <Formik
      initialValues={{
        productName: "",
        category: "",
        brand: "",
        sku: "",
        price: "",
        stock: "",
        description: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, helpers) => {
        await createProduct.mutateAsync(values);
        helpers.resetForm();
      }}
    >
      {({ errors, touched, isSubmitting, resetForm }) => (
        <Form>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Row className="g-4">

                <Col md={12} className="text-center ">
                  <h5>Product Information</h5>
                </Col>

                <Col md={6} sm={12}> 
                  <FormikField
                    label="Product Name"
                    name="productName"
                    placeholder="Apple iPhone 15"
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={6} sm={12}>
                  <FormikSelect
                    label="Category"
                    name="category"
                    options={data?.map((c) => ({
                      id: c.id,
                      name: c.categoryName,
                    }))}
                    isLoading={isLoading}
                    error={error}
                    touched={touched}
                  />
                </Col>

                <Col md={6} sm={12}>
                  <FormikField
                    label="Brand"
                    name="brand"
                    placeholder="Apple"
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={6} sm={12}>
                  <FormikField
                    label="SKU"
                    name="sku"
                    placeholder="SKU-123"
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={6} sm={12}>
                  <FormikField
                    label="Price"
                    name="price"
                    type="number"
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={6} sm={12}>
                  <FormikField
                    label="Stock"
                    name="stock"
                    type="number"
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={12} sm={12}>
                  <FormikField
                    label="Description"
                    name="description"
                    as="textarea"
                    rows={4}
                    errors={errors}
                    touched={touched}
                  />
                </Col>

                <Col md={12} sm={12}>
                  <FormActions
                    onCancel={resetForm}
                    isSubmitting={isSubmitting}
                  />
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Form>
      )}
    </Formik>
  );
}

export default FormikAddProducts;
