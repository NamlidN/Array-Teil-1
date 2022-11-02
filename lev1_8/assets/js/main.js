const DeutscheGerichte = ['Speckkuchen','Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten'
]

DeutscheGerichte.unshift('Bremer Knipp', 'pinkel im Grühnkohl','Linsen Eintopf','Sauerbraten')

console.log(DeutscheGerichte);

AA = DeutscheGerichte.shift() 
AB = DeutscheGerichte.shift() 
AC = DeutscheGerichte.shift() 
const NichtGut = [AA,AB,AC] 
console.log(NichtGut);