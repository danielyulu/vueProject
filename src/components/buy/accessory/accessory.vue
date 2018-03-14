<template>
    <div>
        <listdatagrid api="http://10.3.136.62:88/classify" type="配饰"></listdatagrid>
    </div>
</template>

<script>

import listdatagrid from '../sifts/listdatagrid.vue';

export default {
    components: {
        listdatagrid,
    },
}

</script>