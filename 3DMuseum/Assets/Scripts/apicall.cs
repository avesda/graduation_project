using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using SimpleJSON;
using UnityEngine.UI;


class NFTasset
{
    private string name;
    private string unitName;
    private string url;

    public NFTasset()
    {
        this.name = "Name";
        this.unitName = "Unit Name";
        this.url = "example url";
    }
    public NFTasset(string name, string unitName, string url)
    {
        this.name = name;
        this.unitName = unitName;
        this.url = url;
    }

    public void setName(string name)
    {
        this.name = name;
    }
    public void setUnitName(string unitName)
    {
        this.unitName = unitName;
    }
    public void setUrl(string url)
    {
        this.url = url;
    }

    public string getName()
    {
        return this.name;
    }
    public string getUnitName()
    {
        return this.unitName;
    }
    public string getUrl()
    {
        return this.url;
    }

}

public class apicall : MonoBehaviour
{
    private const string URL = "https://algoexplorerapi.io/idx2/v2/accounts/";

    [SerializeField] public Text _name;
    [SerializeField] public Text _unitname;
    [SerializeField] public Text _url;
    [SerializeField] private RawImage _imageUI;

    NFTasset NFTassetRetrived = new NFTasset();
    private string address = "YXBJXD7HC22TWD2U76BVBRD3VYUWSYUEEKXQB4ZC6QA6KMYADSI6HPRDLQ";

    public void readStringInput(string input)
    {
        address = input;
    }

    public void GenerateRequest()
    {
        StartCoroutine(ProcessRequest(URL+address));
    }

    private IEnumerator ProcessRequest(string uri)
    {
        using (UnityWebRequest request = UnityWebRequest.Get(uri))
        {
            yield return request.SendWebRequest();

            if (request.result == UnityWebRequest.Result.ConnectionError)
            {
                Debug.Log(request.error);
            }
            else
            {
                //Debug.Log(request.downloadHandler.text);
                JSONNode itemsData = JSON.Parse(request.downloadHandler.text);

                string account_address = itemsData["account"]["address"];
                int asset_count = itemsData["account"]["assets"].Count;

                for (int i = 0; i < asset_count; i++)
                {
                    string assetID = itemsData["account"]["assets"][i]["asset-id"].ToString();
                    StartCoroutine(AssetProcessRequest(assetID));
                }

                // can be used to retrieve NFT image from the filestorage 

                StartCoroutine(DownloadImageRequest(NFTassetRetrived.getUrl()));
                

                

                 
                // assigning json result to ui elements
               
                
            }
        }
    }
    private IEnumerator DownloadImageRequest(string imageURL)
    {
        
        using (UnityWebRequest itemImageRequest = UnityWebRequestTexture.GetTexture(imageURL))
        {
            yield return itemImageRequest.SendWebRequest();

            if (itemImageRequest.result == UnityWebRequest.Result.ConnectionError)
            {
                Debug.Log(itemImageRequest.error);
            }
            else
            {
                _imageUI.texture = DownloadHandlerTexture.GetContent(itemImageRequest);
                _imageUI.color = new UnityEngine.Color(1F, 1F, 1F, 1F);
                _name.text = NFTassetRetrived.getName();
                _unitname.text = NFTassetRetrived.getUnitName();
                _url.text = NFTassetRetrived.getUrl();
            }
        }
    }
    private IEnumerator AssetProcessRequest(string assetID)
    {
        string asset_request_base_url = "https://algoexplorerapi.io/idx2/v2/assets/";
       
        using (UnityWebRequest asset_request = UnityWebRequest.Get(asset_request_base_url + assetID))
        {
            yield return asset_request.SendWebRequest();

            if (asset_request.result == UnityWebRequest.Result.ConnectionError)
            {
                Debug.Log(asset_request.error);
            }
            else
            {
                JSONNode assetItemsData = JSON.Parse(asset_request.downloadHandler.text);
                Debug.Log(assetItemsData.ToString());
                if (assetItemsData["asset"]["params"]["url"] != null)
                {
                    if (((string)assetItemsData["asset"]["params"]["url"]).StartsWith("ipfs://"))
                    {
                        Debug.Log(assetItemsData["asset"]["params"]["url"]);
                        NFTassetRetrived.setName(assetItemsData["asset"]["params"]["name"]);
                        NFTassetRetrived.setUnitName(assetItemsData["asset"]["params"]["unit-name"]);
                        string abs_url = "https://ipfs.io/ipfs/";
                        abs_url = abs_url + ((string)assetItemsData["asset"]["params"]["url"]).Replace("ipfs://", "");
                        NFTassetRetrived.setUrl(abs_url);
                        Debug.Log("Name: " + NFTassetRetrived.getName());
                        Debug.Log("Unit Name: " + NFTassetRetrived.getUnitName());
                        Debug.Log("Url: " + NFTassetRetrived.getUrl());
                    }
                }
            }
        }
    }

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
