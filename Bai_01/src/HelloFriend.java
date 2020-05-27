
public class HelloFriend {
	String ten;
	int tuoi;
	boolean gioiTinh;
	String dienThoai;
	
	
	public HelloFriend() {
		super();
	}
	public HelloFriend(String ten, int tuoi, boolean gioiTinh, String dienThoai) {
		super();
		this.ten = ten;
		this.tuoi = tuoi;
		this.gioiTinh = gioiTinh;
		this.dienThoai = dienThoai;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		
		return getTen()+"\t" + getTuoi() +"\t"+ (isGioiTinh()==true?"Nam":"Nữ") +"\t"+ getDienThoai()+ "\t" ;
	}
	public String getTen() {
		return ten;
	}
	public void setTen(String ten) {
		this.ten = ten;
	}
	public int getTuoi() {
		return tuoi;
	}
	public void setTuoi(int tuoi) {
		this.tuoi = tuoi;
	}
	public boolean isGioiTinh() {
		return gioiTinh;
	}
	public void setGioiTinh(boolean gioiTinh) {
		this.gioiTinh = gioiTinh;
	}
	public String getDienThoai() {
		return dienThoai;
	}
	public void setDienThoai(String dienThoai) {
		this.dienThoai = dienThoai;
	}
	
	

}
