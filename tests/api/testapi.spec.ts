import { request } from "http";
import test, { expect , request as req} from "@playwright/test";
import exp from "constants";
import path from "path";
import fs from "fs";

test.beforeEach('GET reqres api', async ({request}) => {

});

// write a test



test('POST reqres api', async ({request}) => {

    const response = await request.post('/api/users',{
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });

    console.log((await response.body()).toString());

    expect( response).toBeOK();
    expect( response.status()).toEqual(201);
    expect(await response.json()).toBeTruthy();
    expect(await response.json()).toEqual({"name": "morpheus","job": "leader","id": expect.anything(),"createdAt": expect.anything()});
    expect(await response.json()).toEqual(expect.objectContaining({"name" : "morpheus"}));
    expect(await response.json()).toEqual(expect.objectContaining({"id" : expect.anything()}));
    expect(await response.json()).toMatchObject({"name" : "morpheus"});
});


test('GET reqres api', async ({request}) => {

    const response = await request.get('/api/users/23',{});
    expect(response.status()).toEqual(404);
    expect(await response.json()).toEqual({});
});


test('GET reqres api - single user', async ({request}) => {
    const firstNameValue = 'Janet';
    const status_ok = 200;
    const status_unauthorized = 401;
    const response = await request.get('/api/users/2',{});
    expect(response.status()).toEqual(status_ok);
    console.log((await response.body()).toString());

    let bodyResp = JSON.parse(await response.text());

    console.log("email ===== "+bodyResp.data.email);
    expect(await bodyResp.data.first_name).toBe(`${firstNameValue}`);
});


test('GET restful api - object', async ({}) => {

    const context = await req.newContext({
        baseURL: 'https://api.restful-api.dev/',
        extraHTTPHeaders: {
            // 'Content-Type': 'application/json'
            // 'Authorization': 'Bearer ${token}'
        }
    });

    const response = await context.get('/objects/7');
    expect(response).toBeOK();
    console.log((await response.body()).toString());
});

// 


test.skip('multipart scratch', async ({request}) => {
    const response = await request.post('/api/users',{
        data: {
            "name": "morpheus",
            "job": "leader"
        },
        headers: {
            ContentType: 'multipart/form-data'
        },
        multipart: {
            file: {
                name: path.resolve("folder/","abc.png"),
                mimeType: 'image/png',
                buffer: fs.readFileSync(path.resolve("folder/","abc.png"))
            },
            title: 'Image of request'
        }
    });
});