// import data from "../../../characters.json";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../../components/ui/card";

// export default function SorcererPage() {
//   const sorcererClass = data.characterClasses.find(
//     (cls) => cls.name.toLowerCase() === "sorcerer"
//   );

//   return (
//     <main className="p-4">
//       <h1>{sorcererClass?.name}</h1>
//       <Card>
//         <CardHeader>
//           <CardTitle>Lore</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p>{sorcererClass?.lore}</p>
//         </CardContent>
//       </Card>
//       <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {sorcererClass?.characters.map((subclass, index) => (
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
