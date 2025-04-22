class ItemsPages {
    hamburger= "//button[@class='text-2xl 2xl:hidden']//*[name()='svg']"
    itemsidebar= "//span[normalize-space()='Items']"
    allitem= "//a[normalize-space()='All Items']"
    itemgroup= "//a[normalize-space()='Item Group']"
    itembrand= "//a[normalize-space()='Item Brand']"
    itemtype= "//a[normalize-space()='Item Type']"
    itemunit= "//a[normalize-space()='Item Unit']"
    hover= "//button[@class='h-10 w-10 text-xl center-inner hover:text-primary hover:text-2xl duration-300']//*[name()='svg']"
    
    
    itemcode= "//th[normalize-space()='Item Code']"
    itemname= "//th[normalize-space()='Item Name']"
    brand= "//th[normalize-space()='Brand']"
    group= "//th[normalize-space()='Group']"
    type= "//th[normalize-space()='Type']"
    unitprice= "//th[normalize-space()='Unit Price']"
    status= "//th[normalize-space()='Status']"
    action= "//th[normalize-space()='Action']"
    
    
    fitemname="//input[@id='item_name']"
    fexampleitemname= "//td[normalize-space()='iPhone 16 Pro Max']"
    fitemcode= "//input[@id='item_code']"
    fitembrand= "//input[@id='brand_id']"
    fgroup= "//input[@id='group_id']"
    ftype= "//input[@id='type_id']"
    funit="//input[@id='unit_id']"
    fstatus= "//input[@id='status']"
    filter= "//span[normalize-space()='Filter']"
    
    Additem= "//a[@class='text-[17px] font-medium px-3 py-0.5 flex items-center gap-2 rounded text-white bg-[#F37D1F]']"
    print= "//span[normalize-space()='Print']"
    export= "//span[normalize-space()='Export']"
    edit= "//td[@class='ant-table-cell ant-table-cell-row-hover']//a[@data-discover='true']//*[name()='svg']"
    delete= "//td[@class='ant-table-cell ant-table-cell-row-hover']//button[@type='button']//*[name()='svg']"
    paginationright= "//span[@aria-label='right']//*[name()='svg']"
    peginationleft= "//li[@title='Previous Page']//button[@type='button']"
    pagelimit= "//span[@title='20 / page']"

}
export default ItemsPages;