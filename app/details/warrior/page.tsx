// import data from "../../../characters.json";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../../components/ui/card";

// export default function WarriorPage() {
//   const warriorClass = data.characterClasses.find(
//     (cls) => cls.name.toLowerCase() === "warrior"
//   );

//   return (
//     <main className="p-4">
//       <h1>{warriorClass?.name}</h1>
//       <Card>
//         <CardHeader>
//           <CardTitle>Lore</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p>{warriorClass?.lore}</p>
//         </CardContent>
//       </Card>
//       <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {warriorClass?.characters.map((subclass, index) => (
//           <Card key={index}>
//             <CardHeader>
//               <CardTitle>{subclass.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{subclass.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </main>
//   );
// }
