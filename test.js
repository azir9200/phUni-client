const arr = [1,2,3,4];
const result = arr.reduce((acc, item) =>{
    console.log(acc);
    return acc + item;
      }, 0);
      console.log("final result  => ",  result);



        
// export const adminSidebarItems = adminRoutes.reduce(
//     (acc: TSidebarItem[], item) => {
//       if (item.path && item.element) {
//         acc.push({
//           key: item.element,
//           label: <NavLink to={`/admin/${item.path}`}>{item.element}</NavLink>,
//         });
//       }
  
//       if (item.children) {
//         acc.push({
//           key: item.element,
//           label: item.element,
//           children: item.children.map((child) => ({
//             key: child.element,
//             label: <NavLink to={`/admin/${child.path}`}>{child.element}</NavLink>,
//           })),
//         });
//       }
  
//       return acc;
//     },
//     []
//   );


//* Programatical way

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

export const adminPath2 = [
  { 
    name: 'DashBoard',
  path: 'admin/dashboard',
  element: 'ADMIN_DASHBOARD,'
},
{
  name: 'User Management',
  children: [
    {
      name: 'Create Admin',
      path: '/admin/create-admin',
      // element: <CreateAdmin/>,
      element: 'CREATE_ADMIN',
    },
    {
      name: 'Create Faculty',
      path: 'admin/create-faculty',
      // element: <CreateFaculty/>,
      element: 'CREATE_FACULTY',
    },
    {
      name: 'Create Student',
      path: 'admin/create-student',
      // element: <CreateStudent/>,
      element: 'CREATE_STUDENT',
    },
  ],
}
];

// const newArray = adminPath2.reduce((acc, item) => {

//   acc.push(item);

//   return acc;
// }, []);
// console.log(newArray);

const newArray = adminPath2.reduce((acc, item) => {
  if(item.path && item.element){
  acc.push({
    path: item.path,
    element: item.element,
  });
  }
  
  if(item.children){
    item.children.forEach((child)  => {
      acc.push({
        path: child.path,
        Element: child.element,
      });
    });
  }
  
    return acc;
  }, []);
  console.log(newArray);