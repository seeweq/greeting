 function MyCounter(initialNames) {

   var namesGreeted = [];

   if (initialNames !== undefined){
     namesGreeted = initialNames;
   }
   var count = 0;

   function manageName(firstName) {
     //var total = localStorage.getItem('countBy');
     var inList = false;
     for (var i = 0; i < namesGreeted.length; i++) {
       if (namesGreeted[i] === firstName) {
         inList = true;
         break;
       }
     }

     if (!inList) {
       namesGreeted.push(firstName);
     }

   };

   function howManyGreeted() {
     return namesGreeted.length;
   };
   function clear(){
     return namesGreeted = [];
   }
   function allNames(){
     return namesGreeted;
   }

   //manageName(firstName);
   //return namesGreeted.length ;
   return {
     allNames,
     manageName,
     howManyGreeted,
     clear

   }
 };
