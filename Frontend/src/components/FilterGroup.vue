<template>
  <b-dropdown text="Filter defferent categories" variant="primary" class="m-2">
        <div v-for="group in this.groups" :key='group' style="padding-left: 20px">
            <b-form-checkbox v-model="group.selected" @change="checkGroup($event,group)">{{group.group_name}}</b-form-checkbox>
        </div>
    </b-dropdown>
</template>

<script>
export default {
    data(){
        return{
            groups: this.getGroupes(),
            items_by_groups:JSON.parse(localStorage.getItem('items')).map(v => ({...v, selected: false})).map(v => ({...v, given_value: 0})),
        }
    },
    methods:{
        getGroupes(){
            let groups=[];
            let groupedItems=[];
            let items =JSON.parse(localStorage.getItem('items'));
            items.forEach(item => {
                if(!groups.some(group => group.group_name == item.item_group))
                    groups.push({group_name:item.item_group,selected:true});
            });
            return groups;
        },
        checkGroup(e,group){
            if(e){
                this.items_by_groups.forEach(item => {
                    if(item.item_group==group.group_name)
                        this.$parent.items.push(item);
                });
            }
            else{
                let itemsToSplice=[];
                this.$parent.items.forEach(item => {
                    console.log(item.item_name);
                    if(item.item_group==group.group_name){
                        this.items_by_groups.forEach(ig => {
                            if(ig.item_name==item.item_name){ ig.selected=item.selected;ig.given_value=item.given_value;}
                        });
                        itemsToSplice.push(item.item_name);
                    }
                });
                itemsToSplice.forEach(index => {
                    this.$parent.items.splice(this.$parent.items.map(function(i) { return i.item_name; }).indexOf(index),1);
                });
            }
        },
    }
}
</script>

<style>

</style>