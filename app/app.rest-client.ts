import {Request, Response} from 'angular2/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';

import {Todo} from './models/Todo';
import {SessionFactory} from './sessionFactory';

@Injectable()
@BaseUrl("http://localhost/api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
class TodoRESTClient extends RESTClient {
    protected requestInterceptor(req: Request) {
        if (SessionFactory.getInstance().isAuthenticated) {
            req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
        }
    }

    protected requestInterceptor(req: Response) {
        // do sg with responses
    }

    @GET("todo/")
    public getTodos( @Query("sort") sort?: string): Observable { return null; };

    @GET("todo/{id}")
    public getTodoById( @Path("id") id: string): Observable { return null; };

    @POST("todo")
    public postTodo( @Body todo: Todo): Observable { return null; };

    @PUT("todo/{id}")
    public putTodoById( @Path("id") id: string, @Body todo: Todo): Observable { return null; };

    @DELETE("todo/{id}")
    public deleteTodoById( @Path("id") id: string): Observable { return null; };

}