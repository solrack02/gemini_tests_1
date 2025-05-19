

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "#0064fe",
  alignItems: "center",
  width: "100%",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
const test1 = tools.getCtData('all');
console.log({ test1 });

tools.functions.setVar({ args: '',  pass: { keyPath: ['all.temp1'], value: "1" } });

  const apiKey = 'AIzaSyC8MD4ZTRedYmVIvwfAAVCX-OthA6QQ37c';

  async function generateContent() {
    const url =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' +
      apiKey;

    const data = {
      contents: [
        {
          parts: [
            {
              text: 'Você deve gerar o conteúdo pra preencher as informações do youtube (Enviar Vídeo). Gere uma sugestão para Título, Descrição, Hashs e Imagem de Capa, conforme detalhes a seguir:',
            },
            { text: 'um vídeo sobre a vida animal' },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'OBJECT',
          properties: {
            title: { type: 'STRING' },
            description: { type: 'STRING' },
            hashs: {
              type: 'ARRAY',
              items: { type: 'STRING' },
            },
          },
          propertyOrdering: ['title', 'description', 'hashs'],
        },
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro:' + response.status + response.statusText);
      }

      const result = await response.json();
      const rawText = result.candidates[0].content.parts[0].text;
      console.log('Resultado da API:', result);

      // Verificando se o conteúdo é uma string JSON
      let parsedObject;
      try {
        parsedObject = JSON.parse(rawText);
        console.log('Objeto convertido:', parsedObject);
      } catch (e) {
        console.error('Erro ao converter o texto em objeto:', e);
      }

      // setResult(parsedObject);
      return parsedObject;
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  const generateImage = async () => {
    const urlImg =
      'https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=' +
      apiKey;
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      instances: [
        {
          prompt: 'A futuristic teddy bear flying in space.',
        },
      ],
      parameters: {
        sampleCount: 2,
        personGeneration: 'allow_adult',
        includeSafetyAttributes: true,
        aspectRatio: '1:1',
      },
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    return await fetch(urlImg, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log({ result });
        // setImage(result);
        return result;
      })
      .catch(error => console.error(error));
  };

  const content = await generateContent();
  const imageContent = await generateImage();

  console.log({ content, imageContent });
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "left",
}`
          ],

          children: [
            `Minha Tela`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "red" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1"},{name: "Task 2"}] } 
, 
'name': "Name:", 'dataToSet': {name: "Carlos", phone: "1111"} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
