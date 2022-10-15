| URL         | HTTP Verb   | Action      | Notes       | Mongoose Method | View
| ----------- | ----------- | ----------- | ----------- | --------------- | ----------- |
| /logs      | GET       | index   | Text        | Log.find   | Index.jsx        |
| /logs/new      | GET       | new   | Text        | N/A   | New.jsx        |
| /logs/:id      | DELETE       | destroy   | Text        | Log.findByIdAndRemove or Log.findByIdAndDelete   | none        |
| /logs/:id      | PUT       | update   | Text        | Log.findByIdAndUpdate or Log.findOneAndUpdate   | none        |
| /logs      | POST       | create   | Text        | Log.create   | None        |
| /logs/:id/edit      | GET       | edit   | Text        | Log.findOne or Log.findById   | Edit.jsx        | 
| /logs/:id      | GET       | show   | Text        | Log.findOne or Log.findById   | Show.jsx        |