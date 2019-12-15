import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        //return this.store.findAll('task');

        return this.store.findAll('task')
        .then(tasks => {
            // fulfillment
            console.log(tasks);
          }, reason => {
            // rejection
            console.log('findAll error:');
            console.log(reason);
          });

        // return  [
        //     {
        //     "id": 1,
        //     "title": "my first todo",
        //     "is_completed": 0,
        //     "created_at": "2019-12-11 11:02:18",
        //     "updated_at": "2019-12-11 11:02:18"
        //     },
        //     {
        //     "id": 2,
        //     "title": "my second todo",
        //     "is_completed": 0,
        //     "created_at": "2019-12-11 11:03:08",
        //     "updated_at": "2019-12-11 11:03:08"
        //     },
        //     {
        //     "id": 3,
        //     "title": "my todo 3",
        //     "is_completed": 0,
        //     "created_at": "2019-12-11 11:03:27",
        //     "updated_at": "2019-12-11 11:03:27"
        //     }
        //   ];
        
    },

    actions: {
        toggleIsCompleted () {
          //this.model()[ind].is_completed = !this.model()[ind].is_completed
          //console.log(this.model()[ind]);
          //Ember.$('#wrapper').toggleClass('toggled');
          //this.$('#wrapper').toggleClass('toggled');
          //this.$('#item-'+ind).toggleClass('completed');

        //   let el = document.getElementById('item-'+ind);
        //   let is_completed = this.model()[ind].is_completed;
        //   this.model()[ind].is_completed = !is_completed

        //   el.className = ((is_completed) ? "" : "completed");
        //   //el.className.indexOf('completed')!=-1

        //   console.log( el );
          
        },

        createTask: function() {
            
        }
    }
    
});
