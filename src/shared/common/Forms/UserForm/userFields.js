export const userFields = [

{
 name:"firstName",
 label:"First Name",
 type:"text",
 placeholder:"Enter first name",
 required:true,
 autoComplete:"given-name"
},


{
 name:"lastName",
 label:"Last Name",
 type:"text",
 required:true
},


{
 name:"email",
 label:"Email",
 type:"email",
 placeholder:"example@test.com",
 required:true
},


{
 name:"password",
 label:"Password",
 type:"password",
 required:true,
 minLength:8
},


{
 name:"role",
 label:"Role",
 type:"select",
 required:true,

 options:[
  {
   label:"Admin",
   value:"admin"
  },
  {
   label:"Manager",
   value:"manager"
  }
 ]
}

];