Vue.component('-l', {
    data: {}, props: [], computed: {}, template: `Antonio<template v-if = "disclaimer==1">
   <span>
test 1
</span>
</template>
<template v-else-if = "disclaimer==5">
   <span>
else if test 5
</span>
</template>
<template v-else-if = "disclaimer==6">
   <template v-if = "disclaimer==1">
    <b>
Hello
</b>
    
</template>
<template v-else-if = "disclaimer==61">
    elseif........    
</template>
<template v-else>
    else........   
</template>
   <span>
else if test 6
</span>
</template>
<template v-else>
   <span>
else test
</span>
</template>
`)