import Model, { attr } from '@ember-data/model';

export default Model.extend({
    id: attr('number'),
    title: attr('string'),
    is_completed: attr('boolean', { defaultValue: false }),
    created_at: attr('date'),
    updated_at: attr('date')
});


// import DS from 'ember-data';

// export default DS.Model.extend({
//     id: DS.attr(),
//     title: DS.attr(),
//     is_completed: DS.attr(),
//     created_at: DS.attr(),
//     updated_at: DS.attr()
// });


//const { Model, attr, belongsTo } = DS;
